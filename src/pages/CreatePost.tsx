import React, { FormEvent, useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [formError, setFormError] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex  justify-center items-center min-w-screen min-h-[500px]">
      <div className="w-[400px] h-[300px] bg-white">
        <h2>Criar post</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap flex-col h-[250px]"
        >
          <label>
            <span>Título: </span>
            <input
              type="text"
              name="title"
              required
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label>
            <span>Url da imagem: </span>
            <input
              className="w-[200px]"
              type="text"
              name="imageUrl"
              required
              placeholder="Coloque a URL da imagem"
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
            />
          </label>
          <label>
            <p>Conteúdo: </p>
            <textarea
              name="body"
              required
              placeholder="Conteudo do post"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            ></textarea>
          </label>
          <label>
            <span>Tags: </span>
            <input
              className="w-[200px]"
              type="text"
              name="tags"
              required
              placeholder="Insira as tags"
              onChange={(e) => setTags([...tags, e.target.value])}
              value={tags}
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
