import {
  Component,
  Prop,
  Watch
} from '@stencil/core'

@Component({
  tag: 'fizz-buzz',
  styleUrl: 'fizzbuzz.css',
  shadow: true
})

export class FizzBuzz {
  @Prop() fizzColor: string = 'blue'
  @Prop() buzzColor: string = 'red'
  @Prop({mutable: true}) fizz: string = '0'
  @Prop({mutable: true}) buzz: string = '0'
  @Prop({mutable: true}) value: number = 0
  @Prop() maximum: number = 999

  @Watch('value')
  valueChange(newValue: number) {
    console.log(newValue)
    this.fizz = ( newValue % 3 > 0 )
              ? '0'
              : '1'
    this.buzz = ( newValue % 5 > 0 )
              ? '0'
              : '1'
  }

  incrementValue() {
    if ( this.value < this.maximum ) {
      this.value = this.value + 1
    }
  }

  render() {
    return (
      <div class="root">
        <button class="incrementor" onClick={() => this.incrementValue()} type="button">Higher!</button>
        <span class="value">{this.value}</span>
        <div class="output" style={{'--bg-color': this.fizzColor, '--active': this.fizz}}>Fizz!</div>
        <div class="output" style={{'--bg-color': this.buzzColor, '--active': this.buzz}}>Buzz!</div>
      </div>
    )
  }
}
