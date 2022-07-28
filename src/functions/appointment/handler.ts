
export const appointmentHandler = async (event) => {
  const body = event.body;
  console.log("estoy desde la lambda que ejecutara operaciones desde ecuador");

  return {
    statusCode: 200,
    body
  };
};
