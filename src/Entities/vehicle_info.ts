import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Generated,
} from "typeorm";

@Entity({ name: "VehicleInfo" })
export class VehicleInfo extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "uuid", type: "varchar", unique: true })
  @Generated("uuid")
  uuid: string;

  @Column({ name: "vin", type: "varchar", nullable: true })
  vin: string;

  @Column({ name: "userId", type: "varchar", nullable: true })
  userId: string;

  @Column({ name: "modelYear", type: "varchar", nullable: true })
  modelYear: string;

  @Column({ name: "title", type: "int", nullable: true })
  title: number;

  @Column({ name: "brand", type: "int", nullable: true })
  brand: number;

  @Column({ name: "insurance", type: "int", nullable: true })
  insurance: number;

  @Column({ name: "junkSalvage", type: "int", nullable: true })
  junkSalvage: number;

  @Column({ name: "vehicleDetails", type: "text", nullable: true })
  vehicleDetails: string;

  @Column({ name: "status", type: "int", nullable: true })
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
