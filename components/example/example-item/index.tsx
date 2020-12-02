import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getExampleData } from 'components/example/example.thunks';
import styles from 'components/example/example-item/index.module.scss';

interface Props {
  /**
   * Props 1
   */
  props1: string;
  /**
   * Props 2
   */
  props2: string;
  /**
   * Props 3
   */
  props3?: string;
}

export const ExampleItem: React.FC<Props> = ({ props1, props2, props3 }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onButtonClicked = (ev: React.MouseEvent) => {
    dispatch(getExampleData());
  };

  const onDashboardBtnClicked = (ev: React.MouseEvent) => {
    router.push('/dashboard');
  };

  return (
    <div className={styles['ExampleComponent']}>
      <h1>
        {props1} {props2} {props3}
      </h1>
      <button onClick={onButtonClicked}>Get Data</button>
      <button onClick={onDashboardBtnClicked}>Dashboard</button>
    </div>
  );
};

ExampleItem.defaultProps = {
  props3: 'default string'
};
