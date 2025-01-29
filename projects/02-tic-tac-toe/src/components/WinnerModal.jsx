import { Square } from "./Square"
import PropTypes from 'prop-types';

WinnerModal.propTypes = {
    winner: PropTypes.bool,
    resetGame: PropTypes.func.isRequired,
  };
  
  
export function WinnerModal ({winner , resetGame}) {
    if(winner === null ) return
    const winnerText = winner === false ? "Empate" : "Ganó"
    return (
        
              <section className="winner">
                <div className="text">
                <h2>
                  {winnerText}
                </h2>
    
                <div className="win">
                  {winner && <Square>{winner}</Square>}
                </div>
    
                <footer>
                  <button onClick={resetGame} >Reiniciar partida</button>
                </footer>
    
    
                </div>
    
              </section>
            )
}