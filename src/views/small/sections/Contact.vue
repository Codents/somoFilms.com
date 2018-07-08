<template>
  <section class="contact f f-column f-justify-start f-align-items-center">
    <div class="header f f-column f-justify-center f-align-items-center f-shrink-0">
      <span class="title">{{ $t('contact.title') }}</span>
    </div>
    <div class="body f f-column f-justify-start f-align-items-center">
      <form class="contact-us f f-column f-justify-start f-align-items-center">
        <div class="group-fields f f-column f-space-around f-align-items-center">
          <label class="field"
                 for="subject">{{ $t('contact.subject') }}</label>
          <select class="field subject"
                  name="subject">
            <option value="oferta">Oferta</option>
            <option value="general">General</option>
          </select>
        </div>
        <div class="group-fields f f-column f-space-around f-align-items-center">
          <label class="field"
                 for="email">{{ $t('contact.email') }}</label>
          <input class="field email"
                 placeholder="email@hosting.com"
                 type="email"
                 name="email" />
        </div>
        <div class="group-fields f f-column f-space-around f-align-items-center">
          <label class="field"
                 for="description">{{ $t('contact.description') }}</label>
          <textarea rows="4"
                    name="description"
                    class="field description"
                    cols="50" />
        </div>
        <input type="submit" class="bt-start" />
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
      margin: 1rem;
      .group-fields {
        width: 100%;
        margin-top: 1rem;
        .subject {
          font-size: 1.4rem;
          border: solid 1px #e8e7e7;
          border-radius: 5px;
          background-color: white;
          padding: 0.2rem;
        }
        .email {
          border-radius: 5px;
          border: solid 1px #e8e7e7;
          font-size: 1.4rem;
          padding: 0.2rem;
        }
        .description {
          border-radius: 5px;
          border: solid 1px #e8e7e7;
          font-size: 1.4rem;
          padding: 0.2rem;
        }
        .field {
          margin-top: 0.4rem;
          width: 100%;
          outline: none;
        }
      }
      .bt-start {
        margin-top: 1.4rem;
        border: solid 1px;
        border-radius: 5px;
        padding: 0.3rem 0.5rem 0.3rem 0.5rem;
        font-size: 2.2rem;
        background-color: white;
        outline: none;
      }
    }
  }
}
</style>
