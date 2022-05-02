// General
import { FC } from "react";

// Icons
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Config
import { colors } from "../../Config/variables";

// Types

type Props = {
  rating: number;
};

// ============================ Rating Stars ============================

const RatingStars: FC<Props> = ({ rating }) => {
  const ratingStar = Math.ceil(rating / 2);

  return (
    <>
      {[...Array(ratingStar)].map((_, i) => (
        <FontAwesome
          style={{ marginRight: 3 }}
          key={i}
          name="star"
          size={12}
          color={colors.secondaryCTA}
        />
      ))}
      {[...Array(5 - ratingStar)].map((_, i) => (
        <FontAwesome
          style={{ marginRight: 3 }}
          key={i}
          name="star"
          size={12}
          color={colors.tertiaryBlue}
        />
      ))}
    </>
  );
};

export default RatingStars;
