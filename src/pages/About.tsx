const About = () => {
  return (
    <section className='flex justify-center'>
      <article className='w-[450px] bg-overlay-bg rounded-b-xl mb-2'>
        <header className='bg-card-bg rounded-lg m-4 p-2'>
          <h1 className='text-center text-xl font-bold text-primary-text'>
            Sobre o Tibia Blog
          </h1>
        </header>
        <div className='flex flex-col m-4 space-y-6'>
          <div>
            <p className='bg-content-bg text-black leading-relaxed rounded-md p-4 indent-3'>
              O <strong>Tibia Blog</strong> é um projeto que une a paixão pelo
              universo tibiano ao desenvolvimento web. Criado por um jogador
              para jogadores, é um espaço onde você pode compartilhar suas
              conquistas e momentos únicos vividos em suas jornadas tibianas.
            </p>
          </div>
          <div>
            <h2 className='font-semibold text-lg text-primary-text mb-2'>
              O que você encontra no site
            </h2>
            <p className='bg-content-bg text-black leading-relaxed rounded-md p-4 indent-3'>
              Uma área para criar posts sobre suas aventuras no Tibia, com
              título, imagem, comentário descritivo e hashtags para facilitar a
              busca por publicações relacionadas, além de uma página inicial que
              reúne todos os posts compartilhados pelos jogadores.
            </p>
          </div>
          <div>
            <p className='text-center text-primary-text font-medium'>
              Seja bem-vindo e sinta-se à vontade para explorar, contribuir e
              compartilhar suas histórias!
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default About
