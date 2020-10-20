import play from './player'

describe("The fizzbuzz player", ()=>{
    expectResult("1", 1);

    expectResult("2", 2);

    expectResult("fizz", 3);

    expectResult("buzz", 5);

    expectResult("fizz", 6);

    expectResult("buzz", 10);

    expectResult("fizzbuzz", 15);

    expectResult("fizzbuzz", 30);

    function expectResult(expected, input){
        describe("Given " + input, ()=>{
            it("returns " + expected, ()=>{
                expect(play(input)).toEqual(expected.toString());
            })
        });
    }
});

