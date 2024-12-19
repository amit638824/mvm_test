import {
    BaseEntity,
    Column,
    Entity,
    Generated,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity({ name: "User" })
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;
  
    @Column({ name: "uuid", type: "varchar", unique: true })
    @Generated("uuid")
    uuid: string;
  
    @Column({ name: "userId", type: "varchar", nullable: true })
    userId: string;
  
    @Column({ name: "userType", type: "varchar", nullable: true })
    userType: number;
  
    @Column({ name: "name", type: "varchar", nullable: true })
    name: string;
  
    @Column({ name: "emailId", type: "varchar", nullable: true })
    emailId: string;
  
    @Column({ name: "phoneNumber", type: "varchar", nullable: true })
    phoneNumber: string;
  
    @Column({ name: "address", type: "varchar", nullable: true })
    address: string;

    @Column({ name: "profile", type: "varchar", nullable: true })
    profile: string;
  
    @Column({ name: "status", type: "int", default: 1 })
    status: number;
  
    @Column({
      name: "createdAt",
      type: "timestamptz",
      default: () => "CURRENT_TIMESTAMP",
    })
    createdAt: Date;
  
    @Column({
      name: "updatedAt",
      type: "timestamptz",
      default: () => "CURRENT_TIMESTAMP",
    })
    updatedAt: Date;
  
    @Column({
      name: "createdBy",
      type: "varchar",
      length: 50,
      nullable: true,
      default: null,
    })
    createdBy: string;
  
    @Column({
      name: "updatedBy",
      type: "varchar",
      length: 50,
      nullable: true,
      default: null,
    })
    updatedBy: string;
  }
  