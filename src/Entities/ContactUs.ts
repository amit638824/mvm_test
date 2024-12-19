import {
    BaseEntity,
    Column,
    Entity,
    Generated,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "ContactUs" })
export class ContactUs extends BaseEntity {

    @PrimaryGeneratedColumn({ name: "id" })
    @Generated("uuid")
    id: string;

    @Column({
        name: "name",
        type: "varchar",
        length: 50,
        nullable: true,  
    })
    name: string;

    @Column({
        name: "email",
        type: "varchar",
        length: 50,
        nullable: true,
    })
    email: string;

    @Column({
        name: "phone",
        type: "varchar",
        length: 20,
        nullable: true,
    })
    phone: string;

    @Column({
        name: "message",
        type: "text",  
        nullable: true,
    })
    message: string;

    @Column({
        name: "subject",
        type: "varchar",
        length: 255,
        nullable: true,
    })
    subject: string;

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
