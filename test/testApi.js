import supertest from "supertest";
import {server} from  "./../server.js";
import should from "should";


// UNIT test begin

describe("users API unit tests",function(){
  this.timeout(120000);

// #1 return a collection of json documents
  it("should return collection of JSON documents",function(done){

    // calling home page api
    supertest(server)
    .get("/api/users")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

  // #2 add a user
  it("should add a user",function(done){

    // post to /api/users
    // calling home page api
    supertest(server)
    .post('/api/users')
    .send({name:"Linda Flinn",address:"3 Main St"})
    .expect("Content-type",/json/)
    .expect(201)
    .end(function(err,res){
      res.status.should.equal(201);
      res.body.user.should.have.property('_id');
      res.body.user.name.should.equal('Linda Flinn');
      done();
    });
  });

  it("should add and delete Linda Flinn",function(done){
    // post to /api/users
    // calling home page api
    const superserver = supertest(server);
    superserver
    .get("/api/users")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
        const id = res.body[0]._id;
        superserver
        .put("/api/users/"+id)
        .send({name:"Linda Fl",address:"456 Strand St"})
        .expect("Content-type",/json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            superserver
            .delete("/api/users/"+id)
            .expect("Content-type",/json/)
            .expect(200) // THis is HTTP response
            .end(function(err,res){
                res.body._id.should.equal(id);
                res.body.name.should.equal("Linda Fl");
                done();
             }
           );
           }
         );
      });
    });

    it("should delete user",function(done){
      // post to /api/users
      // calling home page api
      const superserver = supertest(server);
      superserver
      .get("/api/users")
      .expect("Content-type",/json/)
      .expect(200) // THis is HTTP response
      .end(function(err,res){
          const id = res.body[0]._id;
          superserver
              .delete("/api/users/"+id)
              .expect("Content-type",/json/)
              .expect(200) // THis is HTTP response
              .end(function(err,res){
                  res.body._id.should.equal(id);
                  res.body.should.have.property("name");
                  done();
               }
             );
             }
           );
      });


  });
