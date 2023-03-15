import * as React from 'react';
import { useState, ChangeEvent, useRef, useCallback } from 'react';

import { Itask } from '../interface';
import ListItems from './listItems';
import Navbar from './navbar';
import {
  AddTaskBtn,
  Input,
  InputLabel,
  Inputsection,
} from '../Styled components/inputarea';
import {
  Outputarea,
  Tablestyle,
  AllDel,
  AllDone,
} from '../Styled components/outputarea';

export default function ToDoList() {
  let [todolist, setToDoList] = useState<Itask[]>([]);
  let [checkAll, setCheckAll] = useState<boolean>(false);
  let [buttonText, setButtonText] = useState<string>('Add-Task');

  const Identity = useRef(null);
  const task = useRef<HTMLInputElement>(null);
  const deadline = useRef<HTMLInputElement>(null);
  const idForCheck = useRef(null);

  const handledatadisplay = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      if (event.target.name === 'task') {
        task.current.value = event.target.value;
      } else deadline.current.value = event.target.value;
    },
    []
  );
  //*-----------------------------------------------------*//
  const handleDataPush = useCallback(() => {
    const genID = Date.now();
    if (task.current.value == '') {
      alert('please fill all the fields');
    } else {
      if (Identity.current) {
        const newarr = todolist.map((item) => {
          if (item.ID === Identity.current) {
            item.taskname = task.current.value;

            item.daystocomplete = deadline.current.value;
          }
          return item;
        });
        setToDoList(newarr);
      } else {
        const newtask = {
          taskname: task.current.value,
          daystocomplete: deadline.current.value,
          ID: genID,
          isComplete: false,
        };
        setToDoList([...todolist, newtask]);
      }
      task.current.value = '';
      deadline.current.value = '0';
      Identity.current = null;
      setButtonText('Add-Task');
    }
  }, [todolist, task.current, deadline.current]);

  //*-----------------------------------------------------------*//

  const handleEdit = useCallback(
    (taskidtoedit: number): void => {
      Identity.current = taskidtoedit;

      setButtonText('Save-Task');

      console.log(Identity.current);
      todolist.map((clickedForEdit) => {
        if (Identity.current === clickedForEdit.ID) {
          task.current.value = clickedForEdit.taskname;
          deadline.current.value = clickedForEdit.daystocomplete;
        }
      });
    },
    [Identity.current, todolist]
  );

  //*-----------------------------------------------------*//

  const handleDelete = useCallback(
    (tasknametodelete: number): void => {
      if (Identity.current == null)
        setToDoList(
          todolist.filter((task) => {
            return task.ID !== tasknametodelete;
          })
        );
    },
    [todolist]
  );

  //*-----------------------------------------------------*//

  const handleDeleteAll = useCallback(() => {
    if (todolist.length != 0) {
      setToDoList((todolist = []));
    }
  }, [todolist]);

  //*-----------------------------------------------------*//

  const handleCheckBox = useCallback(
    (taskIdcheck: number, checkboxval: boolean): void => {
      if (Identity.current === null) {
        idForCheck.current = taskIdcheck;

        const newarr = todolist.map((item) => {
          if (item.ID === idForCheck.current) {
            item.isComplete = checkboxval;
          }
          return item;
        });

        setToDoList(newarr);

        //using array.every

        let globalCheck = (element: {
          taskname: string;
          daystocomplete: string;
          ID: number;
          isComplete: boolean;
        }): boolean => {
          return element.isComplete === true;
        };
        if (newarr.every(globalCheck) === true) setCheckAll(true);
        else setCheckAll(false);
      }
    },

    [todolist, idForCheck.current]
  );

  //*-----------------------------------------------------*//

  const handleCheckAll = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const allCheckedArray = todolist.map((item) => {
        item.isComplete = e.target.checked;

        if (item.isComplete === true) {
          setCheckAll(true);
        } else {
          setCheckAll(false);
        }

        return item;
      });
      setToDoList(allCheckedArray);
    },
    [todolist, checkAll]
  );
  //*-----------------------------------------------------*//

  return (
    <div>
      <Navbar />
      <Inputsection>
        <InputLabel>
          {' '}
          <label>SET GOAL:</label>{' '}
        </InputLabel>

        <Input
          type="text"
          defaultValue=""
          onChange={handledatadisplay}
          ref={task}
          placeholder="Enter your task..."
          name="task"
        ></Input>

        <InputLabel>
          <label> BALL-PARK YOUR GOAL:</label>{' '}
        </InputLabel>
        <Input
          type="number"
          defaultValue="0"
          onChange={handledatadisplay}
          ref={deadline}
          placeholder="deadline in days.."
          name="deadline"
        ></Input>

        <AddTaskBtn onClick={handleDataPush}>{buttonText}</AddTaskBtn>

        <img
          src="https://www.actitime.com/wp-content/uploads/2020/03/best-to-do-list-apps-to-stop-forgetting-things.png"
          alt="target image"
        />
      </Inputsection>

      {/* outputarea */}
      <Outputarea>
        <Tablestyle cellPadding="20" cellSpacing="20">
          <thead>
            <tr>
              <th>
                {' '}
                <AllDone
                  type="checkbox"
                  onChange={handleCheckAll}
                  checked={checkAll}
                ></AllDone>{' '}
                All Done
              </th>

              <th>Task</th>
              <th>Days to Complete</th>
              <th>
                Edit or Delete
                <AllDel onClick={handleDeleteAll}>Delete All</AllDel>
              </th>
            </tr>
          </thead>
          <tbody>
            {todolist.map((task: Itask, id) => {
              return (
                <ListItems
                  task={task}
                  key={id}
                  taskToDelete={handleDelete}
                  taskToEdit={handleEdit}
                  handleCheck={handleCheckBox}
                />
              );
            })}
          </tbody>
        </Tablestyle>
      </Outputarea>
    </div>
  );
}
