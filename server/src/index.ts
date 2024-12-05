// index.ts
import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT}, NODE_ENV: ${process.env.NODE_ENV}`
  );
});
