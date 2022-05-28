import './Footer.css';

const Footer = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <div className='footer'>
        <p>
          Crafted with ❤️ in Indonesia by{' '}
          <a href='https://onpilot.github.io' target='_blank' rel='noreferrer'>
            Idan
          </a>
          . Made with react, material ui and{' '}
          <a
            href='https://github.com/meetDeveloper/freeDictionaryAPI'
            target='_blank'
            rel='noreferrer'
          >
            freeDictionaryAPI
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
