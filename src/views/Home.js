import Tile from '../components/Tile/Tile';
import tileimage from '../assets/img/tile-1.jpg';
import Button from '../components/Button/Button';

const Home =()=>{
return(
<section>
<div className="container">
<h1>Home</h1>
<hr />
<Tile image={tileimage}>
<h2>Weeosh</h2>
<p>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben. Eines Tages aber beschloß eine kleine Zeile Blindtext, ihr Name war Lorem Ipsum, hinaus zu gehen in die weite Grammatik. Der große Oxmox riet ihr davon ab, da</p>
<Button uri="/#/styleguide" title="Button" classes="btn--secondary"/>
</Tile>
</div>
<hr />
</section>
)
}
export default Home