import { TimePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

const format = 'HH:mm';

const time = () => {
  return(
    <TimePicker defaultValue={moment('00:00', format)} format={format} />
  );
} 

export default time;
