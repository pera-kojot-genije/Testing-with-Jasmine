describe('Testing sum function', function() {

    it('should add two integrers', function() {
        expect(sum(2, 2)).toBe(4);
    });

    it('should add two negative numbers', function() {
        expect(sum(-2, -2)).toBe(-4);
    });

    it('should add two decimal numbers', function() {
        expect(sum(0.2, 0.4)).toBe(0.6);
    });

    it('should not add two strings', function() {
        expect(sum('java', 'script')).toBeNaN();
    });

    it('should not add undefind and object', function() {
        expect(sum(undefined, {})).toBeNaN();
    });

    it('should not add string and number', function() {
        expect(sum('javascript', 2)).toBeNaN();
    });

    it('should not add string and negative number', function() {
        expect(sum('javascript', -2)).toBeNaN();
    });

    it('should not add string and decimal', function() {
        expect(sum('javascript', 0.2)).toBeNaN();
    });

    it('should add to an infinity', function() {
        expect(sum(Infinity, 1)).toBe(Infinity);
    });


});