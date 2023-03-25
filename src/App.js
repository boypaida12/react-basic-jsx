import fifaLogo from './images/fifa logo.png';
import fifa14 from './images/fifa14.jpeg';
import fifa18 from './images/fifa 18.webp';
import fifa19 from './images/fifa 19.jpeg';
import fifa17 from './images/fifa 17.jpeg';
import fifa21 from './images/fifa 21.jpeg';
import './fifa.css';

function App() {
  return (
    <div className="App">
      <main className="main-container">
        <div className='title-container'>
          <img src={fifaLogo} className="App-logo" alt="logo" width={300}/>
          <h1>The Battle of the Franchises</h1>
        </div>
       <div className='content-container'>
          <div className='description'>
            <p style={{fontWeight: "bold"}}>By: Anonymous Caterpilla</p>
            <p className='description-text'>Vestibulum et ex in risus ullamcorper finibus vel non leo. Cras pretium lorem vitae congue sollicitudin. Vivamus imperdiet, velit sed malesuada feugiat, ipsum odio tincidunt diam, vitae malesuada magna sem a nisi. Integer ultricies libero eu eros viverra eleifend. Maecenas venenatis nunc a lacinia pretium. Duis commodo dolor sed nisl maximus rutrum. Ut odio odio, pulvinar in quam ac, tristique dignissim risus. Nulla vitae facilisis felis. Nam aliquet magna iaculis nulla iaculis, id interdum sapien placerat. Sed lacus est, condimentum tempus elementum at, varius et odio. Nulla ac auctor sem. Vestibulum sed dolor fermentum, auctor mi et, facilisis arcu. Fusce sed metus erat.</p>
            <p className='description-text'>Nam hendrerit metus vitae dapibus tempor. In a urna vel libero bibendum eleifend. Etiam quis ex ut turpis rhoncus posuere. Quisque tincidunt fringilla tortor, id vulputate leo blandit et. Aenean id nisl tincidunt, tincidunt tortor at, tempus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin interdum urna vitae ante tincidunt feugiat. Suspendisse vehicula, nulla semper tempor laoreet, enim felis posuere tortor, sed mollis orci odio at sem.Aliquam finibus semper tincidunt. Etiam euismod felis sed venenatis rutrum. Vivamus convallis arcu erat. Mauris sollicitudin odio quis convallis facilisis. Vestibulum in ante dolor. Quisque molestie arcu id blandit semper. Aenean et ullamcorper nunc, finibus pretium ante. Quisque efficitur vestibulum enim, vel euismod massa bibendum at. Duis commodo ullamcorper tincidunt. Etiam eu elit commodo odio facilisis tincidunt a ut mi
            </p>
          </div>
          <div className='ranking'>
            <ol>
              <li>
                <article>
                  <h2>FIFA 14</h2>
                  <p>Lorem Curabitur euismod nisi ut risus lobortis, et volutpat risus ultricies. Aenean faucibus mi quis augue interdum, sed ultrices felis dapibus.</p>
                  <div className='fifa-container'>
                    <img src={fifa14} className="fifa14" alt="fifa 14 game" width={300}/>
                  </div>
                </article>
              </li>
              <li>
                <article>
                  <h2>FIFA 18</h2>
                  <p>Lorem Curabitur euismod nisi ut risus lobortis, et volutpat risus ultricies. Aenean faucibus mi quis augue interdum, sed ultrices felis dapibus.</p>
                  <div className='fifa-container'>
                    <img src={fifa18} className="fifa14" alt="fifa 14 game" width={300}/>
                  </div>
                </article>
              </li>
              <li>
                <article>
                  <h2>FIFA 19</h2>
                  <p>Lorem Curabitur euismod nisi ut risus lobortis, et volutpat risus ultricies. Aenean faucibus mi quis augue interdum, sed ultrices felis dapibus.</p>
                  <div className='fifa-container'>
                    <img src={fifa19} className="fifa14" alt="fifa 14 game" width={300}/>
                  </div>
                </article>
              </li>
              <li>
                <article>
                  <h2>FIFA 21</h2>
                  <p>Lorem Curabitur euismod nisi ut risus lobortis, et volutpat risus ultricies. Aenean faucibus mi quis augue interdum, sed ultrices felis dapibus.</p>
                  <div className='fifa-container'>
                    <img src={fifa21} className="fifa14" alt="fifa 14 game" width={300}/>
                  </div>
                </article>
              </li>
              <li>
                <article>
                  <h2>FIFA 17</h2>
                  <p>Lorem Curabitur euismod nisi ut risus lobortis, et volutpat risus ultricies. Aenean faucibus mi quis augue interdum, sed ultrices felis dapibus.</p>
                  <div className='fifa-container'>
                    <img src={fifa17} className="fifa14" alt="fifa 14 game" width={300}/>
                  </div>
                </article>
              </li>
            </ol>
          </div>
       </div>
      </main>
    </div>
  );
}

export default App;
