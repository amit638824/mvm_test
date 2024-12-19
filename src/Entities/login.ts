import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "Login" })
export class Login extends BaseEntity {

  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "uuid", type: "varchar", unique: true })
  @Generated("uuid")
  uuid: string;

  @Column({
    name: "userId",
    type: "varchar",
    length: 50,
    nullable: true,
    default: null,
  })
  userId: string;

  @Column({
    name: "emailId",
    type: "varchar",
    length: 50,
    nullable: true,
    default: null,
  })
  emailId: string;

  @Column({
    name: "password",
    type: "varchar",
    length: 50,
    nullable: true,
    default: null,
  })
  password: string;

  @Column({
    name: "loginToken",
    type: "varchar",
    length: 255,
    nullable: true,
    default: null,
  })
  loginToken: string;

  @Column({
    name: "status",
    type: "int",
    nullable: true,
    default: 1,
  })
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
