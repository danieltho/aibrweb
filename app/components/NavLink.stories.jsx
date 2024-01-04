import { NavLink } from './NavLink';

export default {
  component: NavLink,
};

export const Default = {
  render: () => <NavLink path={`/`} label={`Asociacion`} />,
};

export const Uppercase = {
  render: () => <NavLink uppercase path={`/`} label={`Asociacion`} />,
};

export const Active = {
  render: () => <NavLink active path={`/`} label={`Asociacion`} />,
};
