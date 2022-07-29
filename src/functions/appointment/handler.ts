
export const appointmentHandler = async (event) => {
  console.log("estoy desde la lambda que ejecutara operaciones desde ecuador");

  return {
    statusCode: 200,
    event
  };
};
