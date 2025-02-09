import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Text } from '../text';
import { XIcon } from '@/assets';
import { Divider } from '../divider';
import styled from 'styled-components';
import { getStatusIcon } from '@/utils';
import { IconButton } from '../icon-button';
import { FlexRow, progress, slide } from '@/styles';
import { type Notification, NOTIFICATION_TYPE } from '@/types';

interface OnCloseParams {
  asSeen: boolean;
}

interface Props {
  id?: string;
  type: NOTIFICATION_TYPE;
  title?: Notification['title'];
  message?: Notification['message'];
  action?: {
    label: string;
    onClick: () => void;
  };
  onClose?: (params: OnCloseParams) => void;
  style?: React.CSSProperties;
}

const TOAST_DURATION = 5000;
const TRANSITION_DURATION = 500;

const Container = styled.div<{ $isLeaving?: boolean }>`
  position: relative;
  &.animated {
    overflow: hidden;
    padding-bottom: 1px;
    border-radius: 32px;
    animation: ${({ $isLeaving }) => ($isLeaving ? slide.out['top'] : slide.in['top'])} ${TRANSITION_DURATION}ms forwards;
  }
`;

const DurationAnimation = styled.div<{ $type: Props['type'] }>`
  position: absolute;
  bottom: -1px;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 32px;
  background-color: ${({ $type, theme }) => theme.text[$type]};
  animation: ${progress.out} ${TOAST_DURATION - TRANSITION_DURATION}ms forwards;
`;

const Content = styled.div<{ $type: Props['type'] }>`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 32px;
  background-color: ${({ $type, theme }) => theme.colors[$type]};
`;

const TextWrapper = styled.div<{ $withAction: boolean }>`
  display: flex;
  align-items: center;
  margin: 0 auto 0 0;
  max-width: ${({ $withAction }) => ($withAction ? '400px' : '500px')};
  height: 12px;
`;

const Title = styled(Text)<{ $type: Props['type'] }>`
  font-size: 14px;
  color: ${({ $type, theme }) => theme.text[$type]};
`;

const Message = styled(Text)<{ $type: Props['type'] }>`
  color: ${({ $type, theme }) => theme.text[$type]};
  font-size: 12px;
`;

const ButtonsWrapper = styled(FlexRow)``;

const ActionButton = styled(Text)`
  text-transform: uppercase;
  text-decoration: underline;
  font-size: 12px;
  font-family: ${({ theme }) => theme.font_family.secondary};
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
`;

export const NotificationNote: React.FC<Props> = ({ type, title, message, action, onClose, style }) => {
  // These are for handling transitions:
  // isEntering - to stop the progress bar from rendering before the toast is fully slide-in
  // isLeaving - to trigger the slide-out animation
  const [isEntering, setIsEntering] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  // These are for handling on-hover events (pause/resume the progress bar animation & timeout for auto-close/dismiss)
  const timerForClosure = useRef<NodeJS.Timeout | null>(null);
  const progress = useRef<HTMLDivElement | null>(null);

  const closeToast = useCallback(
    (params: OnCloseParams) => {
      if (onClose) {
        setIsLeaving(true);
        setTimeout(() => {
          onClose({ asSeen: params?.asSeen });
        }, TRANSITION_DURATION);
      }
    },
    [onClose],
  );

  useEffect(() => {
    const t = setTimeout(() => setIsEntering(false), TRANSITION_DURATION);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    timerForClosure.current = setTimeout(() => closeToast({ asSeen: false }), TOAST_DURATION);
    return () => {
      if (timerForClosure.current) clearTimeout(timerForClosure.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timerForClosure.current) clearTimeout(timerForClosure.current);
    if (progress.current) progress.current.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    if (progress.current) {
      const remainingTime = (progress.current.offsetWidth / (progress.current.parentElement as HTMLDivElement).offsetWidth) * 4000;

      timerForClosure.current = setTimeout(() => closeToast({ asSeen: false }), remainingTime);
      progress.current.style.animationPlayState = 'running';
    }
  };

  const StatusIcon = getStatusIcon(type);

  return (
    <Container className={onClose ? 'animated' : ''} $isLeaving={isLeaving} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Content data-id='toast' $type={type} style={style}>
        <StatusIcon />

        <TextWrapper $withAction={!!action}>
          {title && <Title $type={type}>{title}</Title>}
          {title && message && <Divider orientation='vertical' type={type} />}
          {message && <Message $type={type}>{message}</Message>}
        </TextWrapper>

        {(!!action || !!onClose) && (
          <ButtonsWrapper>
            {action && (
              <ActionButton data-id='toast-action' onClick={action.onClick}>
                {action.label}
              </ActionButton>
            )}
            {onClose && (
              <IconButton data-id='toast-close' onClick={() => closeToast({ asSeen: true })}>
                <XIcon size={12} />
              </IconButton>
            )}
          </ButtonsWrapper>
        )}
      </Content>

      {onClose && !isEntering && !isLeaving && <DurationAnimation ref={progress} $type={type} />}
    </Container>
  );
};
