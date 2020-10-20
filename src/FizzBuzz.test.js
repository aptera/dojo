jest.mock('./fizzbuzz/player')
import React from 'react';
import { render, queryByTestId, fireEvent } from '@testing-library/react';
import FizzBuzz from './FizzBuzz'
import play from './fizzbuzz/player'

describe("The Fizz Buzz component", ()=>{
    expectedToHaveA("fizzbuzz-input", "text");
    expectedToHaveA("fizzbuzz-button", "button");

    describe("When playing", ()=>{
        describe("Given input", ()=>{
            it("displays the Fizz Buzz answer", ()=>{ 
                const { container } = render(<FizzBuzz />);
                const input = queryByTestId(container, "fizzbuzz-input");
                const button = queryByTestId(container, "fizzbuzz-button");
                const display = queryByTestId(container, "fizzbuzz-answer");
                play.mockReturnValue("answer");
                fireEvent.change(input, {target:{value:"Drew"}});
                fireEvent.click(button);
                expect(display.textContent).toEqual("answer");
                expect(play).toHaveBeenCalledWith("Drew");
            })
        })
    })

    it("has a display", ()=>{
        const { container } = render(<FizzBuzz />);
        const display = queryByTestId(container, "fizzbuzz-answer");
        expect(display).toBeInTheDocument();
        expect(display.textContent).toEqual("");
    });

    function expectedToHaveA(testID, inputType){
            it("has a(n) " + inputType, ()=>{
                const { container } = render(<FizzBuzz />);
                const input = queryByTestId(container, testID);
                expect(input).toBeInTheDocument();
                expect(input.type).toEqual(inputType);
            })
    }
});
