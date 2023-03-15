import * as React from 'react';
import { ChangeEvent } from 'react';
import { Itask } from '../interface';
import {
  CheckInput,
  DeleteBtn,
  EditBtn,
  LabelText,
} from '../Styled components/outputarea';

interface Props {
  task: Itask;
  taskToDelete(taskID: number): void;
  taskToEdit(taskID: number): void;
  handleCheck(taskID: number, checked: boolean): void;
}

function ListItems({ task, taskToDelete, taskToEdit, handleCheck }: Props) {
  const buttonEdit = (): void => {
    taskToEdit(task.ID);
  };

  const buttonDelete = (): void => {
    taskToDelete(task.ID);
  };

  const checkButton = (e: ChangeEvent<HTMLInputElement>): void => {
    handleCheck(task.ID, e.target.checked);
  };

  return (
    <tr>
      <td>
        <CheckInput
          type="checkbox"
          onChange={checkButton}
          checked={task.isComplete}
        ></CheckInput>
      </td>
      <td>
        <LabelText bool={task.isComplete ? '1' : 'default'}>
          {task.taskname}
        </LabelText>
      </td>
      <td>
        <LabelText bool={task.isComplete ? '1' : 'default'}>
          days left: {task.daystocomplete}
        </LabelText>
      </td>

      <td>
        <EditBtn bool={task.isComplete} onClick={buttonEdit}>
          edit task{' '}
        </EditBtn>
        <DeleteBtn onClick={buttonDelete}>delete task</DeleteBtn>
      </td>
    </tr>
  );
}
export default React.memo(ListItems);
