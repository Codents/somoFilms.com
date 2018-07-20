<template>
  <section class="contact f f-column f-justify-start f-align-items-center">
    <div class="header f f-column f-justify-center f-align-items-center f-shrink-0">
      <span class="title">{{ $t('contact.title') }}</span>
    </div>
    <div class="body f f-column f-justify-start f-align-items-center">
      <form class="contact-us f f-column f-justify-start f-align-items-center">
        <div class="group-fields f f-column f-space-around f-align-items-center f-shrink-0">
          <label class="field"
                 for="subject">{{ $t('contact.subject') }}</label>
          <select class="field subject"
                  name="subject">
            <option value="oferta">Oferta</option>
            <option value="general">General</option>
          </select>
        </div>
        <div class="group-fields f f-column f-space-around f-align-items-center f-shrink-0">
          <label class="field"
                 for="email">{{ $t('contact.email') }}</label>
          <input class="field email"
                 placeholder="email@hosting.com"
                 type="email"
                 name="email" />
        </div>
        <div class="group-fields f f-column f-space-around f-align-items-center f-shrink-0">
          <label class="field"
                 for="description">{{ $t('contact.description') }}</label>
          <textarea rows="4"
                    name="description"
                    class="field description"
                    cols="50" />
        </div>
        <button class="bt-start f-shrink-0">{{ $t('contact.post') }}</button>
        <div class="surf">
          <img class="w-100"
               alt="animaterd-surf"
               src="../../assets/img/contact_bg.gif" />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@import '../../styles/flex.scss';
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
  .surf {
    margin-top: 2rem;
    opacity: 0.6;
  }
  .body {
    height: 80%;
    width: 100%;
    overflow-y: auto;
    .contact-us {
      margin: 1rem;
      .group-fields {
        width: 100%;
        margin-top: 1rem;
        .subject {
          color: black;
          appearance: none;
          box-sizing: border-box;
          font-family: 'Poiret One', serif;
          font-size: 1.4rem;
          border: solid 1px #e8e7e7;
          border-radius: 5px;
          background-color: white;
          height: 40px;
        }
        .email {
          color: black;
          appearance: none;
          box-sizing: border-box;
          font-family: 'Poiret One', serif;
          border-radius: 5px;
          border: solid 1px #e8e7e7;
          font-size: 1.4rem;
          height: 2rem;
        }
        .description {
          color: black;
          appearance: none;
          border-radius: 5px;
          border: solid 1px #e8e7e7;
          font-size: 1.4rem;
        }
        .field {
          padding: 0.2rem;
          margin-top: 0.4rem;
          width: 100%;
          outline: none;
        }
      }
      .bt-start {
        color: #7d7b7b;
        margin-top: 1.4rem;
        border: solid 1px;
        border-radius: 5px;
        padding: 0.3rem 0.5rem 0.3rem 0.5rem;
        font-size: 2.2rem;
        background-color: white;
        outline: none;
        z-index: 9;
      }
    }
  }
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0.5em;
  background: #efefef;
  border: none;
  border-radius: 3px;
  padding: 1em 2em 1em 1em;
  font-size: 1em;
}
.select-container {
  position: relative;
  display: inline;
}
.select-container:after {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  pointer-events: none;
}
.select-container:after {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  top: 0.3em;
  right: 0.75em;
  border-top: 8px solid black;
  opacity: 0.5;
}
select::-ms-expand {
  display: none;
}
</style>
