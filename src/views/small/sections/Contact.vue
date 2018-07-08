<template>
  <section class="contact f f-column f-justify-start f-align-items-center">
    <div class="header f f-column f-justify-center f-align-items-center f-shrink-0">
      <span class="title">{{ $t('contact.title') }}</span>
    </div>
    <div class="body f f-column f-justify-start f-align-items-center">
      <form class="contact-us f f-column f-justify-start f-align-items-center">
        <div class="group-fields f f-row f-space-around f-align-items-center">
          <label class="field" for="subject">{{ $t('contact.subject') }}</label>
          <select class="field subject"
                  name="subject">
            <option value="oferta">Oferta</option>
            <option value="general">General</option>
          </select>
        </div>
        <div class="group-fields f f-row f-space-around f-align-items-center">
          <label class="field" for="email">{{ $t('contact.email') }}</label>
          <input class="field email"
                 type="email"
                 name="email" />
        </div>
        <textarea rows="4"
                  cols="50" />
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@import '../../../flex.scss';
.contact {
  position: relative;
  width: 100%;
  height: 100%;
  .header {
    height: 20%;
    .title {
      padding: 0.3rem 0.5rem 0.3rem 0.5rem;
      font-size: 2.2rem;
      text-align: center;
    }
  }
  .body {
    height: 80%;
    width: 100%;
    .contact-us {
      font-size: 1.4rem;
      .group-fields {
        margin-left: .8rem;
        width: 100%;
        .field {
          width: 50%;
        }
      }
    }
  }
}
</style>
