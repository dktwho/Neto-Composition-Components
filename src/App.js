import './App.css';
import Card from './Components/Card';
import CardImg from './Components/CardImg/CardImg'

function App() {
  return (
    <div className="App-container">
      <Card
        width="18rem"
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        btnName="Go somewhere"
      >
        <CardImg
          src="https://diomerc.com/wp-content/uploads/2013/03/image-alignment-300x200.jpg"
          alt="Plug"
        />
      </Card>
    </div>
  );
}

export default App;
