import Card from '../modules/Card';

const CardGrid = () => {
  return (
    <>
     {/* <header className="top-header">
       <div className='top-header__name'>Devon Darrow</div>
     </header> */}
     <div className='card-parent'>
      <div className='card-grid-wrapper'>
        <div className='card-main-wrapper'>
          <div className='card-country-name'>FRONT-END</div>
          <h1 className="header-card">World Travels</h1>
          <p className='card-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <Card />
      </div>
      </div>
    </>
  );
}

export default CardGrid;