import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[],
  selectedId: number | undefined,
  onShowModal: (selectedTodo: Todo) => void,
};

export const TodoList: React.FC<Props> = ({
  todos,
  onShowModal,
  selectedId,
}) => {
  const handleShow = (todo: Todo) => {
    onShowModal(todo);
  };

  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {todos.map(todo => {
          const {
            id,
            title,
            completed,
          } = todo;

          const isSelected = selectedId === id;

          return (
            <tr
              key={id}
              data-cy="todo"
              className={classNames(
                { 'has-background-info-light': isSelected },
              )}
            >
              <td className="is-vcentered">{id}</td>
              <td className="is-vcentered">
                {completed && (
                  <span className="icon" data-cy="iconCompleted">
                    <i className="fas fa-check" />
                  </span>
                )}
              </td>
              <td className="is-vcentered is-expanded">
                <p
                  className={completed ? 'has-text-success' : 'has-text-danger'}
                >
                  {title}
                </p>
              </td>
              <td className="has-text-right is-vcentered">
                <button
                  data-cy="selectButton"
                  className="button"
                  type="button"
                  onClick={() => handleShow(todo)}
                >
                  <span className="icon">
                    <i className={classNames(
                      'far',
                      { 'fa-eye': !isSelected },
                      { 'fa-eye-slash': isSelected },
                    )}
                    />
                  </span>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};