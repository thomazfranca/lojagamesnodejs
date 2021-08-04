
export default class Service {
  constructor(repository) {
    this.repository = repository
  }

  async put(query, update) {
    return await this.repository.findOneAndUpdate(query, update, {
      upsert: true,
    })

  }

  async create(obj) {
    let model = this.repository(obj)
    await model.save()
    return model
  }

  async getById(id) {
    return this.repository.findById(id)
  }

  async get(filter) {
    return this.repository.find(filter)
  }

  async delete(filter) {
    return this.repository.findOneAndUpdate(filter, {
      $set: { active: false },
    })
  }

}
