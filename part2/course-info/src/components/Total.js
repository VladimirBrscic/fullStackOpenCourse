
const Total = ({sum
}) => {
    return (
        <b>
          Total of{" "}
          {sum.reduce(
            (accumulator, currentValue) => accumulator + currentValue.exercises,
            0
          )}{" "}
          exercises
        </b>
      );
}

export default Total