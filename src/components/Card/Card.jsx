import * as Components from "./Components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMyFavorites, deleteMyFavorites } from "../../redux/actions";

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((s) => s.myFavorites);

  function handleFavorite(ch) {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteMyFavorites(ch.id));
    } else {
      setIsFav(true);
      dispatch(addMyFavorites(ch));
    }
  }

  useEffect(() => {
    myFavorites.forEach((ch) => {
      if (ch.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <Components.Card>
      <Components.Box>
        <Components.Content>
          <Components.Numero>01</Components.Numero>
          <Components.Subtittle>Card One</Components.Subtittle>
          <Components.Texto>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            totam velit? Iure nemo labore inventore?
          </Components.Texto>
          <Components.Link href="#">Read More</Components.Link>
        </Components.Content>
      </Components.Box>
    </Components.Card>
    // <div className={styles.card}>
    //   <div className={styles.upbar_card}>
    //     {isFav ? (
    //       <button onClick={() => handleFavorite(props)}>❤️</button>
    //     ) : (
    //       <button onClick={() => handleFavorite(props)}>🤍</button>
    //     )}
    //     <button className={styles.bttn} onClick={props.onClose}>
    //       X
    //     </button>
    //   </div>
    //   <div className={styles.txt}>
    //     <Link className={styles.linki} to={`/detail/${props.id}`}>
    //       <h2>{props.name}</h2>
    //       <p>{props.species}</p>
    //       <p>{props.gender}</p>
    //       <img src={props.image} alt={props.image} />
    //     </Link>
    //   </div>
    // </div>
  );
}
