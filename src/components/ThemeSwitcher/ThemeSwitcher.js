import MaterialUISwitch from './MaterialUISwitch';

const ThemeSwitcher = ({ darkmode, setDarkmode }) => {
  return (
    <label style={{ position: 'absolute', top: '2rem', right: '1rem' }}>
      toggle theme
      <MaterialUISwitch
        onClick={() => setDarkmode((prevState) => !prevState)}
      />
    </label>
  );
};

export default ThemeSwitcher;
