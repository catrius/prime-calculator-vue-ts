<template>
  <div class='homepage'>
    <h4>Previous prime number calculator</h4>
    <label for='input' v-if='false'/>
    <input
      id='input'
      :value='input'
      class='input'
      @keypress='handleInputKeyPress'
      @change='handleInputChange'
    />
    <button class='calculate-button' @click='handleButtonClick'>
      Calculate
    </button>
    <h5>{{ output || 'Not found' }}</h5>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { calculatePreviousPrimeNumber } from '@/utils/math';
import { ChangeEvent } from 'react';

export default Vue.extend({
  name: 'HelloWorld',
  data() {
    const result: {
      input: number | null,
      output: number | null,
    } = {
      input: 0,
      output: 0,
    };
    return result;
  },
  methods: {
    calculate() {
      this.output = calculatePreviousPrimeNumber(this.input);
    },
    handleInputKeyPress(e: KeyboardEvent) {
      if (e.key === 'Enter') {
        this.calculate();
      }
    },
    handleInputChange(e: ChangeEvent<HTMLInputElement>) {
      this.input = parseInt(e.currentTarget.value, 10);
    },
    handleButtonClick() {
      this.calculate();
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.homepage
  position: fixed
  top: 40%
  left: 50%
  transform: translate(-50%, -50%)

  .input
    display: block
    width: 400px
    margin: 0 auto 25px auto
    text-align: center

</style>
