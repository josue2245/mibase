import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContenidoComponent } from './contenido.component';
import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de que ReactiveFormsModule esté importado
import { UsuarioService } from '../../services/usuario.service'; // Asegúrate de que el servicio esté importado

describe('ContenidoComponent', () => {
  let component: ContenidoComponent;
  let fixture: ComponentFixture<ContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContenidoComponent], // Declara el componente que estás probando
      imports: [ReactiveFormsModule], // Importa ReactiveFormsModule, ya que el componente usa formularios reactivos
      providers: [UsuarioService] // Si necesitas el servicio, agrégalo aquí
    })
    .compileComponents(); // Compila el componente

    fixture = TestBed.createComponent(ContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta los cambios después de crear el componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se haya creado correctamente
  });
});
