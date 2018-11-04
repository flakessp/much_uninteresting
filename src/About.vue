<template>
  <main>
    <div class="about-header">
      <figure>
        <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/4056023?autoplay=1&loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>
      </figure>
      <div class="header-row">
        <h1>наша миссия</h1>
        <p>ZOLOTOgroup – это междисциплинарная команда, работающая над различными проектами в сферах развития территории, брендинга, создания систем навигации и визуальной стратегии коммуникации брендов. Через понимание поведения посетителя, мы предлагаем проектные решения, находящиеся на стыке потребительского маркетинга, архитектуры, урбанистики, социологии и антропологии.</p>
      </div>
      <a href="">скачать pdf портфолио </a>
    </div>
    <div class="about-gallery">
      <section v-for="item in 6" :key="item">
        <img src="./assets/images/person.jpg" alt="">
        <h2 class="caption">Имя Фамилия</h2>
        <h2 class="caption">Арт Директор</h2>
      </section>
    </div>
    <div class="about-content">
      <section  v-for="item in 4" :key="item">
        <h1>{{item}}</h1>
        <h2>Заголовок</h2>
        <p>ZOLOTOgroup – это междисциплинарная команда, работающая над различными проектами в сферах развития территории, брендинга, создания систем навигации и визуальной стратегии коммуникации брендов.</p>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
figure {
  margin-bottom: 33px;
}
main {
  padding: 33px;
}
p {
  font: 20px/1.25 'Aeroport-regular';
}
.header-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 200px;

}

.about-header {
  padding-bottom: 30px;
  border-bottom: 1px solid black;
  p {
    max-width: 640px;
  }
  a {
    font: 15px "Aeroport-mono";
    text-transform: uppercase;
    display: block;
    text-align: right;
    color: inherit;
    text-decoration: none;
  }
}

 h1 {
  font: 40px "Zoloto-display";
 }

 .about-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding-top: 25px;

   img {
     max-width: 100%;
     margin-bottom: 20px;
   }
   h2 {
     font: 20px 'Aeroport-regular';
   }
   section {
     max-width: 420px;
     margin-bottom: 70px;
     
   }
 }
 .about-content {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   padding-top: 40px;
   section {
     max-width: 620px;
     margin-bottom: 100px;
   }
   h1 {
     font: 100px 'Zoloto-display';
     margin-bottom: 45px;
   }
   h2, p {
     font: 20px 'Aeroport-regular';
   }
   h2 {
     margin-bottom: 25px;
   }
 }
</style>
