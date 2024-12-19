import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Generated,
} from "typeorm";

@Entity({ name: "VehicleDataTemp" })
export class VehicleDataTemp extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "uuid", type: "varchar", unique: true })
  @Generated("uuid")
  uuid: string;

  @Column({ name: "vin", type: "varchar", nullable: true })
  vin: string;

  @Column({ name: "vinId", type: "varchar", nullable: true })
  vinId: string;

  @Column({ name: "member", type: "varchar", nullable: false })
  member: string;

  @Column({ name: "model", type: "varchar", nullable: true })
  model: string;

  @Column({ name: "brand", type: "int", nullable: true })
  brand: number;

  @Column({ name: "insurance", type: "int", nullable: true })
  insurance: number;

  @Column({ name: "junkSalvage", type: "int", nullable: true })
  junkSalvage: number;

  @Column({ name: "state", type: "varchar", nullable: true })
  state: string;

  @Column({ name: "resolutionStatus", type: "varchar", nullable: true })
  resolutionStatus: string;

  @Column({ name: "fraudState", type: "int", nullable: true })
  fraudState: number;

  @Column({ name: "currentStatus", type: "int", nullable: true })
  currentStatus: number;

  @Column({ name: "alertDate", type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  alertDate: Date;

  @Column({ name: "actionRequired", type: "int", nullable: true })
  actionRequired: number;

  @Column({ name: "titleStatus", type: "int", nullable: true })
  titleStatus: number;

  @Column({ name: "fuelType", type: "int", nullable: true })
  fuelType: number;

  @Column({ name: "eventTypeId", type: "int", nullable: true })
  eventTypeId: number;

  @Column({ name: "eventDate", type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  eventDate: Date;

  @Column({ name: "summary", type: "text", nullable: true })
  summary: string;

  @Column({ name: "status", type: "varchar", nullable: true })
  status: string;

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
