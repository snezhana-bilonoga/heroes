import Hero from "./Hero.js";
import fileService from "./FileService.js";
import ApiError from "./ApiError.js";

class HeroService {
    async create(hero, images) {
        if (!images) {
            throw ApiError.badRequest('Not correct images are provided.');
        }
        const uplodedImages = Object.values(images).map(fileService.saveFile);
        const createdHero = await Hero.create({...hero, images: uplodedImages});
        return createdHero;
    }

    async getAll() {
        const heroes = await Hero.find();
        return heroes;
    }

    async getOne(id) {
        const hero = await Hero.findById(id);
        return hero;
    }

    async update(hero, images) {
        if (!hero._id) {
            throw ApiError.badRequest('Hero id is not provided.');
        }

        if (images) {
            hero.images = Object.values(images).map(fileService.saveFile);
        }

        const updatedHero = await Hero.findByIdAndUpdate(hero._id, hero, {new: true});
        return updatedHero;
    }

    async delete(id) {
        const deleteHero = await Hero.findByIdAndDelete(id);
        return deleteHero;
    }
}

export default new HeroService();