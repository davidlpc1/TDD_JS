const { describe ,it ,before,afterEach } = require('mocha')
const { expect } = require('chai')
const { createSandbox } = require('sinon')
const TodoRepository = require('../src/todoRepository')

describe('todoRepository',() => {
    let todoRepository
    let sandbox

    before(() => {
        todoRepository = new TodoRepository()
        sandbox = createSandbox()
    })

    afterEach(() => {
        sandbox.restore()
    })

    describe('methods signature',() => {
        it('should call find from lokijs',() => {
            const mockDatabase = require('./mockDatabase')
 
            const functionName = "find"
            const expectedReturn = mockDatabase

            sandbox.stub(
                todoRepository.schedule,
                functionName,
            ).returns(expectedReturn)

            const result = todoRepository.list()
            expect(result).to.be.deep.equal(expectedReturn)
            // Evit loops
            expect(todoRepository.schedule[functionName].calledOnce).to.be.ok
        })
        it('should call insertOne from lokijs',() => {
            const functionName = "insertOne"
            const expectedReturn = true
            
            sandbox.stub(
                todoRepository.schedule,
                functionName,
            ).returns(expectedReturn)

            const data = { name: 'Erick' }

            const result = todoRepository.create(data)

            expect(result).to.be.ok
            expect(todoRepository.schedule[functionName].calledOnceWithExactly(data)).to.be.ok
        })
    })
})