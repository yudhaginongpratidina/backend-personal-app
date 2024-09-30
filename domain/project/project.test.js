// LIBS
import request from "supertest";
import { prismaClient } from "../../application/database.js";
import dotenv from "dotenv";
dotenv.config();

const baseUrl = `http://localhost:${process.env.APPLICATION_PORT}`;


class ProjectTest{

    static async create() {
        await prismaClient.project.create({
            data: {
                name: "test",
                description: "test",
                url_repository: "test",
                url_demo: "test",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        })
    }

    static async delete() {
        await prismaClient.project.deleteMany({ where: {} })
    }

    static async get() {
        const project = await prismaClient.project.findFirst({
            where: {
                name: "test"
            }
        })
        return project
    }

}


describe("POST /projects", () => {

    afterEach(async () => {
        await ProjectTest.delete();
    });


    it("should reject create a project if request is invalid", async () => {
        const response = await request(baseUrl).post("/projects").send({});
        expect(response.status).toBe(400);
        expect(response.body.message).toBeDefined();
    })

    it("should be able to create a project", async () => {
        const response = await request(baseUrl).post("/projects").send({
            name: "test",
            description: "test",
            url_repository: "test",
            url_demo: "test",
        });

        expect(response.status).toBe(201);
        expect(response.body.data.id).toBeDefined();
        expect(response.body.data.name).toBe("test");
        expect(response.body.data.description).toBe("test");
        expect(response.body.data.url_repository).toBe("test");
        expect(response.body.data.url_demo).toBe("test");
    })
})


describe("GET /projects", () => {

    beforeEach(async () => {
        await ProjectTest.create();
    })

    afterEach(async () => {
        await ProjectTest.delete();
    });

    it("should be able to get all projects", async () => {
        const response = await request(baseUrl).get("/projects");
        expect(response.status).toBe(200);
        expect(response.body.data).toBeDefined();
        expect(response.body.data.length).toBe(1);
    })
})


describe("GET /projects/:id", () => {
    
    beforeEach(async () => {
        await ProjectTest.create();
    })


    afterEach(async () => {
        await ProjectTest.delete();
    });


    it("should reject get a project if request id is invalid", async () => {
        const response = await request(baseUrl).get("/projects/1");
        expect(response.status).toBe(400);
        expect(response.body.message).toBeDefined();
    })

    it("should be able to get a project by id", async () => {
        const project = await ProjectTest.get();
        const response = await request(baseUrl).get(`/projects/${project.id}`);
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBe(project.id);
    })
})


describe("PATCH /projects/:id", () => {

    beforeEach(async () => {
        await ProjectTest.create();
    })


    afterEach(async () => {
        await ProjectTest.delete();
    });


    it("should reject update a project if request id is invalid", async () => {
        const response = await request(baseUrl).patch("/projects/0");
        expect(response.status).toBe(400);
        expect(response.body.message).toBeDefined();
    })

    it("should be able to update a project", async () => {
        const project = await ProjectTest.get();
        const response = await request(baseUrl).patch(`/projects/${project.id}`).send({
            name: "test update",
            description: "test update",
            url_repository: "test update",
            url_demo: "test update",
        });
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBe(project.id);
        expect(response.body.data.name).toBe("test update");
        expect(response.body.data.description).toBe("test update");
        expect(response.body.data.url_repository).toBe("test update");
        expect(response.body.data.url_demo).toBe("test update");
    })
})


describe("DELETE /projects/:id", () => {

    beforeEach(async () => {
        await ProjectTest.create();
    });


    afterEach(async () => {
        await ProjectTest.delete();
    });


    it("should reject delete a project if request id is invalid", async () => {
        const response = await request(baseUrl).delete("/projects/0");
        expect(response.status).toBe(400);
        expect(response.body.message).toBeDefined();
    })

    it("should be able to delete a project", async () => {
        const project = await ProjectTest.get();
        const response = await request(baseUrl).delete(`/projects/${project.id}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Delete Project By Id");
        expect(response.body.data.id).toBe(project.id);
    })
})