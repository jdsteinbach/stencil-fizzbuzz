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
  @Prop({mutable: true}) value: number = 0
  @Prop({mutable: true}) fizz: string = '0'
  @Prop({mutable: true}) buzz: string = '0'
  @Prop() maximum: number = 999

  @Watch('value')
  valueChange(newValue: number) {
    this.fizz = this.moduloString(newValue, 3)
    this.buzz = this.moduloString(newValue, 5)
  }

  private moduloString(numerator, denominator) {
    return (numerator % denominator === 0) ? '1' : '0'
  }

  incrementValue() {
    if ( this.value < this.maximum ) {
      this.value = this.value + 1
    }
  }

  componentDidLoad() {
    this.fizz = this.moduloString(this.value, 3)
    this.buzz = this.moduloString(this.value, 5)
  }

  render() {
    return [
      <button class="incrementor" onClick={() => this.incrementValue()} type="button">Higher!</button>,
      <span class="value">{this.value}</span>,
      <div class="output" style={{'--bg-color': this.fizzColor, '--active': this.fizz}}>Fizz!</div>,
      <div class="output" style={{'--bg-color': this.buzzColor, '--active': this.buzz}}>Buzz!</div>
    ]
  }
}
