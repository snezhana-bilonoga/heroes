import HeroService from "./HeroService.js";
import ApiError from "./ApiError.js";

class HeroController {
    async create(req, res, next) {
        try {
            const hero = await HeroService.create(req.body, req.files);
            res.json(hero);
        } catch (error) {
            next(ApiError.badRequest(error));
        }
    }

    async getAll(req, res, next) {
        try {
            const heroes = await HeroService.getAll();
            res.json(heroes);
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next) {
        try {
            const hero = await HeroService.getOne(req.params.id);
            res.json(hero);
        } catch(error) {
            next(ApiError.notFound(`Hero with id: ${req.params.id} is not found.`));
        }
    }

    async update(req, res, next) {
        try {
            const updatedHero = await HeroService.update(req.body, req.files);
            return res.json(updatedHero);
        } catch (error) {
            next(ApiError.notFound(`Hero with id: ${req.params.id} is not found.`));
        }
    }

    async delete(req, res, next) {
        try {
            const deleteHero = await HeroService.delete(req.params.id);
            return res.json(deleteHero);
        } catch (error) {
            next(ApiError.notFound(`Hero with id: ${req.params.id} is not found.`));
        }
    }
}

export default new HeroController(); 