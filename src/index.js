import clickOutside from './utils/clickOutside';
import Button from './components/Button';
import Icon from './components/Icon';
import Input, { RFInput, Label } from './components/Input';
import * as Loading from './components/Loading/index';
import Tabs from './components/Tabs';
import Tooltip from './components/Tooltip';
import Select, { RFSelect } from './components/Select';
import Checkbox, { RFCheckbox } from './components/Checkbox';
import Notices from './components/Notices';
import Modal from './components/Modal';
import TextOrInput from './components/TextOrInput';
import HScrollBox from './components/HScrollBox';
import * as constantsNotices from './constants/notices';
import * as events from './events';
import { initializeRemoteLogging, logger } from './utils/logger';
import { useHorizontalScroll } from './hooks/useHorizontalScroll';

// @TODO: need to finish develop ThemeProvider and export for use
// import ThemeProvider from './components/ThemeProvider';

module.exports = {
  // Components
  Button,
  Icon,
  Input,
  Label,
  Loading,
  Select,
  RFInput,
  RFSelect,
  Tabs,
  Tooltip,
  Checkbox,
  RFCheckbox,
  Notices,
  Modal,
  TextOrInput,
  HScrollBox,

  // Utils
  clickOutside,

  // Hooks
  useHorizontalScroll,

  // Events
  events,

  initializeRemoteLogging,
  logger,

  constants: {
    notices: constantsNotices,
  },
};
