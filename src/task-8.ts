// 1️⃣ Импортируем axios
import axios from "axios";

// 2️⃣ Создаем интерфейс Post
interface Post {
  id: number;
  title: string;
  body: string;
}

// 3️⃣ Функция fetchPosts с типизацией
async function fetchPosts(): Promise<Post[]> {
  // Типизируем axios.get, чтобы знать, что возвращается массив постов
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}

// 4️⃣ Вызов функции и вывод title первого поста
fetchPosts().then((posts) => {
  console.log(posts[0]?.title); // безопасный доступ через ? на случай пустого массива
});
