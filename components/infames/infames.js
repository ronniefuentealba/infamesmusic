import Infame from './infame';

const infamesWrapper = {
  display: "grid",
  gridTemplateColumns: "25% 50% 25%",
  marginBottom: "150px"
}
const infamesContainer = {
  display: "grid",
  gridTemplateColumns: "50% 50%"
}

const Infames = props => (
  <section style={infamesWrapper}>
    <div/>
    <div style={infamesContainer}>
      {props.infames.map( infame => (
        <Infame 
        key={infame.artist}
        artist={infame.artist}
        />
      ))}
    </div>
    <div/>
  </section>
);

export default Infames;