import MaterialUISwitch from './MaterialUISwitch';

const ThemeSwitcher = ({ darkmode, setDarkmode }) => {
  return (
    <div style={{ position: 'absolute', top: '2rem', right: '1rem' }}>
      <MaterialUISwitch
        onClick={() => setDarkmode((prevState) => !prevState)}
      />
    </div>
  );
};

export default ThemeSwitcher;
