const { describe ,it ,before } = require('mocha')
const { expect } = require('chai')
const Todo = require('../src/todo')

describe('todo',() => {
    describe('#isValid',() => {
        it('should return invalid when creating an object without text',() => {
            const data = {
                text:'',
                when: new Date("2020-21-01")
            }
            const todo = new Todo(data)
            const result = todo.isValid()
            expect(result).to.be.not.ok
        })
        it('should return invalid when creating an object using the "when" property invalid',() => {
            const data = {
                text:'Hello World',
                when: new Date("20-21-01")
            }
            const todo = new Todo(data)
            const result = todo.isValid()
            expect(result).to.be.not.ok
        })
        it('should have "id","text","when" and "status" properties after creating object',() => {
            const data = {
                text:'Hello World',
                when: new Date("2020-12-01")
            }
            const todo = new Todo(data)
            const result = todo.isValid()
            expect(result).to.be.ok
        })
    })
})