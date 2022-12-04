import getAllCharacters from "./endpoints/getAllCharacters";
import app from "./app";
import createCharacter from "./endpoints/createCharacter";

app.get("/character", getAllCharacters)
app.put("/character", createCharacter)