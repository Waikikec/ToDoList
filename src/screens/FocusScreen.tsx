import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Spacer from '../components/Spacer';
import TextButton from '../components/TextButton';
import useTaskStore from '../hooks/use-task-store';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Task = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex: 1;
  font-size: 32px;
  padding-bottom: 45px;
`;

type Props = {};

const FocusScreen: React.FC<Props> = () => {
  const {
    focusedTask: task,
    shuffleFocusedTask,
    updateTaskCompletion,
  } = useTaskStore();

  const handleMarkCompleted = () => {
    if (task) {
      updateTaskCompletion(task.id, true);
    }
  };

  const handleNopeClick = () => {
    shuffleFocusedTask();
  };

  return task ? (
    <Container>
      <Task>{task.label}</Task>
      <Button onClick={handleMarkCompleted}>Mark Completed!</Button>
      <Spacer height={45} />
      <TextButton onClick={handleNopeClick}>Nope!</TextButton>
    </Container>
  ) : (
    <Container>No incomplete tasks. Yay!</Container>
  );
};

export default FocusScreen;
