const request = require("supertest");
const app = require("../app");

describe("Shopping Cart API", () => {
  describe("Users Endpoints", () => {
    it("Should get all users", async () => {
      const response = await request(app)
        .get("/users")
        .expect(200)
        .expect("Content-Type", /json/);
      expect(response.body).toEqual(
        expect.objectContaining({
          ok: expect.any(Boolean),
          message: expect.any(String),
          rows: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              username: expect.any(String),
              email: expect.any(String),
              password: expect.any(String),
            }),
          ]),
        })
      );
    });

    it("Should get user by id", async () => {
      const response = await request(app)
        .get("/users/1")
        .expect(200)
        .expect("Content-Type", /json/);
      expect(response.body).toEqual(
        expect.objectContaining({
          ok: expect.any(Boolean),
          message: expect.any(String),
          user: expect.objectContaining({
            id: expect.any(Number),
            username: expect.any(String),
            email: expect.any(String),
            password: expect.any(String),
          }),
        })
      );
    });

    it("Should return not found get user by id", async () => {
      const response = await request(app)
        .get("/users/1000")
        .expect(404)
        .expect("Content-Type", /json/);
      expect(response.body).toEqual(
        expect.objectContaining({
          ok: expect.any(Boolean),
          message: expect.any(String),
        })
      );
    });

    it("Should create user successfully", async () => {
      request(app)
        .post("/users")
        .send({
          username: "James Ryan",
          email: "james.ryan@gmail.com",
          password: "12345",
        })
        .expect(201)
        .expect("Content-Type", /json/);
    });

    it("Should update user successfully", async () => {
      const res = await request(app)
        .put("/users/2")
        .send({
          username: "James Ryan",
          email: "james.ryan234@gmail.com",
          password: "12345",
        })
        .expect(200)
        .expect("Content-Type", /json/);

      expect(res.body).toEqual(
        expect.objectContaining({
          message: expect.any(String),
          ok: expect.any(Boolean),
        })
      );
    });

    it("Should delete user successfully", async () => {
      const res = await request(app)
        .delete("/users/2")
        .expect(200)
        .expect("Content-Type", /json/);

      expect(res.body).toEqual(
        expect.objectContaining({
          message: expect.any(String),
          ok: expect.any(Boolean),
        })
      );
    });
  });

  describe("Products Endpoints", () => {
    test("Should get all products", async () => {
      const response = await request(app)
        .get("/products")
        .expect(200)
        .expect("Content-Type", /json/);
      expect(response.body).toEqual(
        expect.objectContaining({
          ok: expect.any(Boolean),
          message: expect.any(String),
          rows: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              price: expect.any(Number),
              quantity: expect.any(Number),
              image_url: expect.any(String),
            }),
          ]),
        })
      );
    });

    it("Should get product by id", async () => {
      const response = await request(app)
        .get("/products/1")
        .expect(200)
        .expect("Content-Type", /json/);
      expect(response.body).toEqual(
        expect.objectContaining({
          ok: expect.any(Boolean),
          message: expect.any(String),
          product: expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            image_url: expect.any(String),
            price: expect.any(Number),
            quantity: expect.any(Number),
          }),
        })
      );
    });

    it("Should return not found get product by id", async () => {
      const response = await request(app)
        .get("/products/1000")
        .expect(404)
        .expect("Content-Type", /json/);
      expect(response.body).toEqual(
        expect.objectContaining({
          ok: expect.any(Boolean),
          message: expect.any(String),
        })
      );
    });

    it("Should create product successfully", async () => {
      request(app)
        .post("/products")
        .send({
          name: "Test product",
          price: 10000,
          quantity: 10,
          image_url: "12345.png",
        })
        .expect(201)
        .expect("Content-Type", /json/);
    });

    it("Should update product successfully", async () => {
      const res = await request(app)
        .put("/products/2")
        .send({
          name: "Test update product",
          price: 10000,
          quantity: 50,
          image_url: "12345.png",
        })
        .expect(200)
        .expect("Content-Type", /json/);

      expect(res.body).toEqual(
        expect.objectContaining({
          message: expect.any(String),
          ok: expect.any(Boolean),
        })
      );
    });

    test("Should delete product successfully", async () => {
      const res = await request(app)
        .delete("/products/2")
        .expect(200)
        .expect("Content-Type", /json/);

      expect(res.body).toEqual(
        expect.objectContaining({
          message: expect.any(String),
          ok: expect.any(Boolean),
        })
      );
    });
  });

  describe("Cart Items Endpoints", () => {
    it("Should get all cart items", async () => {
      const response = await request(app)
        .get("/cart")
        .expect(200)
        .expect("Content-Type", /json/);
      expect(response.body).toEqual(
        expect.objectContaining({
          ok: expect.any(Boolean),
          message: expect.stringContaining("Fetched cart items successfully"),
          rows: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              customer_id: expect.any(Number),
              product_id: expect.any(Number),
              product_name: expect.any(String),
              product_price: expect.any(Number),
              product_quantity: expect.any(Number),
              product_image_url: expect.any(String),
              product_status: expect.any(String),
            }),
          ]),
        })
      );
    });
    
    it("Should get user specific cart items", async () => {
      const res = await request(app)
        .get("/cart/1")
        .expect(200)
        .expect("Content-Type", /json/);

      expect(res.body).toEqual(
        expect.objectContaining({
          ok: expect.any(Boolean),
          message: expect.stringContaining("Fetched cart items successfully"),
          rows: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              customer_id: expect.any(Number),
              product_id: expect.any(Number),
              product_name: expect.any(String),
              product_price: expect.any(Number),
              product_quantity: expect.any(Number),
              product_image_url: expect.any(String),
              product_status: expect.any(String),
            }),
          ]),
        })
      );
    });

    it("Should add cart item to user", async () => {
      const res = await request(app)
        .post("/cart")
        .send({
          customer_id: 1,
          product_id: 1,
          product_name: "Samsung A32",
          product_price: 30000,
          product_quantity: 1,
          product_image_url: "jgasffa.png",
          product_status: "PENDING",
        })
        .expect(201)
        .expect("Content-Type", /json/);

      expect(res.body).toEqual(
        expect.objectContaining({
          message: expect.stringContaining("Created cart item successfully"),
          ok: expect.any(Boolean),
        })
      );
    });

    it("Should update cart item status", async () => {
      const res = await request(app)
        .put("/cart/status/18")
        .send({
          product_status: "RECEIVED",
        })
        .expect(200)
        .expect("Content-Type", /json/);

      expect(res.body).toEqual(
        expect.objectContaining({
          message: expect.stringContaining("Updated cart item successfully"),
          ok: expect.any(Boolean),
        })
      );
    });

    it("Should update cart item quantity", async () => {
      const res = await request(app)
        .put("/cart/quantity/18")
        .send({
          product_quantity: 5,
        })
        .expect(200)
        .expect("Content-Type", /json/);

      expect(res.body).toEqual(
        expect.objectContaining({
          message: expect.stringContaining("Updated cart item successfully"),
          ok: expect.any(Boolean),
        })
      );
    });

    it("Should delete cart item", async () => {
      const res = await request(app)
        .delete("/cart/18")
        .expect(200)
        .expect("Content-Type", /json/);

      expect(res.body).toEqual(
        expect.objectContaining({
          message: expect.stringContaining("Deleted cart item successfully"),
          ok: expect.any(Boolean),
        })
      );
    });
  });
});
